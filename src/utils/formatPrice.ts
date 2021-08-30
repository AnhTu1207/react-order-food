export const formatPrice = (number: number) => {
  const numberFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return numberFormatter.format(number);
};
