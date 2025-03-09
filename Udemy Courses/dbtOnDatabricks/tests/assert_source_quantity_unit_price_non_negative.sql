{{ config(severity = "warn") }}

select *
from {{ source("landing", "orders") }}
where unit_price < 0 and quantity < 0