
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useIsAdmin = (userId: string | undefined) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;

    const checkAdminStatus = async () => {
      if (!userId) {
        console.log('useIsAdmin: No userId provided');
        if (isMounted) {
          setLoading(false);
          setIsAdmin(false);
        }
        return;
      }

      console.log('useIsAdmin: Checking admin status for userId:', userId);

      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('user_id')
          .eq('user_id', userId)
          .maybeSingle();

        if (error) {
          console.error('Admin check error:', error);
          throw error;
        }
        
        const adminStatus = !!data;
        console.log('useIsAdmin: Admin status result:', { data, adminStatus });
        
        if (isMounted) {
          // Ensure state updates happen in the correct order
          setIsAdmin(adminStatus);
          setTimeout(() => {
            if (isMounted) {
              setLoading(false);
            }
          }, 100);
        }
      } catch (error: any) {
        console.error('Admin status check failed:', error);
        if (isMounted) {
          toast({
            title: "Error",
            description: "Failed to check admin status",
            variant: "destructive",
          });
          setIsAdmin(false);
          setLoading(false);
        }
      }
    };

    setLoading(true); // Ensure loading is true when checking starts
    checkAdminStatus();
    
    return () => {
      isMounted = false;
    };
  }, [userId, toast]);

  return { isAdmin, loading };
};
