
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useIsAdmin = (userId: string | undefined) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('id')
          .eq('user_id', userId)
          .single();

        if (error) throw error;
        setIsAdmin(!!data);
      } catch (error: any) {
        toast({
          title: "Error",
          description: "Failed to check admin status",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [userId, toast]);

  return { isAdmin, loading };
};
