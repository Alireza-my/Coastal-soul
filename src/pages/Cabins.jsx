import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabins from "../features/cabins/AddCabins";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>

      <Row>
        <CabinTable />

        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
