{{ "Hello World" }}

{# Comment #}

{#
multi
line
comment
#}

{# Setting variables #}
{% set var1 = "Hello World" %}
{{ var1 }}

{%- set var2 -%}
    Hello World 1
{% endset %}
{{ var2 }}

{% set var3 = ["Hello World", "Hello World again!"] %}
{{ var3 }}
{{ var3[1] }}

{# If statements #}
{% set temperature = 5 %}
{% if temperature > 20 %}
It is hot
{% else %}
It is not hot
{% endif %}

{% set temperature = 30 %}
{% if temperature > 20 %}
{{ 'It is hot' }}
{% else %}
{{ 'It is not hot' }}
{% endif %}

{%- set temperature = 30 -%}
{%- if temperature > 20 -%}
{{ 'It is hot' }}
{%- elif temperature < 0 -%}
{{ 'It is freezing' }}
{%- else -%}
{{ 'It is not hot' }}
{%- endif -%}

{# For loops #}
{% set names = ["id", "quantity", "unit_price"] %}
{% for name in names %}
    {{ name }}
{% endfor %}

{%- set names = ["id", "quantity", "unit_price"] -%}
select
{%- for name in names %}
    {{ name }}
    {%- if not loop.last -%}
    , 
    {%- endif -%}
{%- endfor %}
from table

{# Functions #}
{{ ref("bronze_orders") }}

{% set now = modules.datetime.datetime.now() %}
{{ now }}

{% set date_today = modules.datetime.datetime.today() %}
{{ date_today }}

{{ adapter.get_columns_in_relation(ref("bronze_orders")) }}

{% set columns = adapter.get_columns_in_relation(ref("bronze_orders")) %}
{% for col in columns %}
    {{ col.name }}
{% endfor %}