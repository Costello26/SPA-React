export const toLocal = (price) => (
    price.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})
);