from django import template

register = template.Library()

@register.filter(name="cut_2")
def cut_2(value,arg):
    # This cuts out all values of "arg" from the string!
    return value.replace(arg,"")

# register.filter('cut_2',cut_2)
