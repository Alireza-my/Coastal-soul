import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";

function GuestTable() {
  const { isLoading, guests } = useGuests();

  if (isLoading) return <Spinner />;
  if (!guests.length) return <Empty resourceName="Guests" />;

  return (
    <Menus>
      <Table columns="1fr 1.6fr 2fr 1.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>ID</div>
          <div>Full Name</div>
          <div>Email</div>
          <div>National ID</div>
          <div>Country</div>
          <div>Flag</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <GuestRow guest={guest} key={guest.id} />}
        />
      </Table>
    </Menus>
  );
}

export default GuestTable;
