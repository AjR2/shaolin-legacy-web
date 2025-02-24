
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
        if (isMounted) {
          setLoading(false);
          setIsAdmin(false);
        }
        return;
      }

      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle();

        if (error) {
          console.error('Admin check error:', error);
          throw error;
        }
        
        if (isMounted) {
          setIsAdmin(!!data);
          setLoading(false);
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

    checkAdminStatus();
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [userId, toast]);

  return { isAdmin, loading };
};
