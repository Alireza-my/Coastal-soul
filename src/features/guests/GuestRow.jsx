import styled from "styled-components";

// import { formatCurrency } from "../../utils/helpers";
// import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
// import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
// import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 4.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

function GuestRow({ guest }) {
  const {
    id: guestId,
    fullName,
    email,
    nationalID,
    nationality,
    countryFlag,
  } = guest;

  return (
    <Table.Row>
      <span>{guestId}</span>
      <span>{fullName}</span>
      <span>{email}</span>
      <span>{nationalID}</span>
      <span>{nationality}</span>
      <Img src={countryFlag}></Img>

      {/* <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div> */}
    </Table.Row>
  );
}

export default GuestRow;
