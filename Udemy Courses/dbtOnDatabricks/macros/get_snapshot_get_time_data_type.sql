{% macro get_snapshot_get_time_data_type() %}
    {% set snapshot_time = adapter.dispatch('snapshot_get_time', 'dbt')() %}
    {% set time_data_type_sql = "select '" ~ snapshot_time ~ "' as dbt_snapshot_time" %}
    {% set snapshot_time_column_schema = get_column_schema_from_query(time_data_type_sql) %}
    {% set time_data_type = snapshot_time_column_schema[0].dtype %}
    {{ return(time_data_type or none) }}
{% endmacro %}