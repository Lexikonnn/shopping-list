
export const handleProductCheck = (
    productId: number,
    productStates: Record<number, boolean>,
    setProductStates: React.Dispatch<React.SetStateAction<Record<number, boolean>>>

  ) => {
    setProductStates((prevStates) => ({
      ...prevStates,
      [productId]: !prevStates[productId],
    }));
  };