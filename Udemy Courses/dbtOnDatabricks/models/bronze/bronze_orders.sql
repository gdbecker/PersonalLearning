{{
    config(
        materialized='incremental',
        unique_key = 'id',
        pre_hook = "{{ print('started the run on (config): ' ~ target.database) }}",
        post_hook = "{{ print('finished the run on (config): ' ~ target.database) }}"
    )
}}

select *
from 
{{ source('landing', 'orders') }}

{% if is_incremental() %}
where created_at > (select coalesce(max(created_at), "1900-01-01") from {{ this }})
{% endif %}