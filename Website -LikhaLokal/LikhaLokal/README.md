# Likha Bag Collection

A PHP + SQLite bag shop demo for Likha Lokal, with product visuals and emblem from the supplied presentation, a customer storefront, cart and checkout, ordering guide, and admin order desk.

## Run it locally

Install PHP 8+ with the PDO SQLite extension enabled, then open a terminal in this folder and run:

```sh
php -S localhost:8000
```

Open [http://localhost:8000](http://localhost:8000). SQLite creates `likha.sqlite` automatically when the page first loads. The admin desk is at [http://localhost:8000/?page=admin](http://localhost:8000/?page=admin).

The admin page is intentionally open for a classroom demonstration. Add authentication and a secure deployment before using it with real customer details. E-wallet checkout records the selected method; connect the group's real wallet payment instructions or gateway before accepting live payments.
