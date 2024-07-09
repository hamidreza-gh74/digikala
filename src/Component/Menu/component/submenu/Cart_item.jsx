const Cart_item = ({ row }) => {
  return (
    <a
      href=""
      className="flex py-[7px] text-[#81858b] text-[11px] font-[400] hover:text-[red]"
    >
      {row.name}
    </a>
  );
};

export default Cart_item;
