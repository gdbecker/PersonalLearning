with reviews as (
    SELECT * FROM {{ source('landing', 'reviews') }} 
),

products as (
    SELECT
    id,
    created_at,
    title as product_name,
    category,
    ean,
    vendor,
    price
    FROM
    {{ source('landing', 'products') }}
)

SELECT
    date(date_format(r.created_at, 'yyyy-MM-dd')) as review_date,
    r.product_id,
    p.product_name,
    avg(r.rating) as avg_rating
FROM reviews r 
LEFT JOIN products p 
ON r.product_id = p.id
group by all