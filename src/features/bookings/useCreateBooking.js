import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createBookingApi(newCabin),
    onSuccess: () => {
      toast.success("New Booking created successfully");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBooking };
}
