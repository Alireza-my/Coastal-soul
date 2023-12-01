import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCreateBooking } from "./useCreateBooking";
import { useForm } from "react-hook-form";
import { useGuests } from "../guests/useGuests";
import { useCabins } from "../cabins/useCabins";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;

  box-shadow: var(--shadow-sm);
  width: 14.5em;
`;

const DateInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;

  box-shadow: var(--shadow-sm);
  width: 14.5em;
`;

function CreateBookingForm({ onCloseModal }) {
  const { isCreating, createBooking } = useCreateBooking();
  const { isLoading: isLoadingGuests, guests } = useGuests();
  const { isLoading: isLoadingCabins, cabins } = useCabins();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    createBooking(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label="Guest ID"
        disabled={isLoadingGuests}
        error={errors?.guestId?.message}
      >
        <Select
          id="guestId"
          {...register("guestId", {
            required: "This field is required",
          })}
        >
          {guests?.map((guest) => (
            <option value={guest.id} key={guest.id}>
              {guest.id}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow
        label="Cabin ID"
        disabled={isLoadingCabins}
        error={errors?.cabinId?.message}
      >
        <Select
          id="cabinId"
          {...register("cabinId", {
            required: "This field is required",
          })}
        >
          {cabins?.map((cabin) => (
            <option value={cabin.id} key={cabin.id}>
              {cabin.id}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <DateInput
          type="date"
          id="startDate"
          disabled={isCreating}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="End Date" error={errors?.endDate?.message}>
        <DateInput
          type="date"
          id="endDate"
          disabled={isCreating}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Nights" error={errors?.numNights?.message}>
        <Input
          type="number"
          id="numNights"
          disabled={isCreating}
          {...register("numNights", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Cabin Price shold be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Guests" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuests"
          disabled={isCreating}
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Cabin Price shold be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Status"
        disabled={isCreating}
        error={errors?.status?.message}
      >
        <Select
          id="status"
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="unconfirmed">Unconfirmed</option>
          <option value="checked-in">Check in</option>
          <option value="checked-out">Check out</option>
          <option value="cancelled">Cancel</option>
        </Select>
      </FormRow>
      <FormRow label="Cabin Price" error={errors?.cabinPrice?.message}>
        <Input
          type="number"
          id="cabinPrice"
          disabled={isCreating}
          {...register("cabinPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Cabin Price shold be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Total Price" error={errors?.totalPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isCreating}
          {...register("totalPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Total Price shold be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
