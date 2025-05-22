with fullmoon_reviews as (
    select * from {{ ref('mart_full_moon_reviews') }}
)
select
    is_full_moon,
    review_sentiment,
    COUNT(*) as reviews
from
    fullmoon_reviews
group by
    is_full_moon,
    review_sentiment
order by
    is_full_moon,
    review_sentiment