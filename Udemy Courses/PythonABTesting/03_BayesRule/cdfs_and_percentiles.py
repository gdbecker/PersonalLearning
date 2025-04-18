# Import packages
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
np.random.seed(0)

# Initial variables
mu = 170
sd = 7

# Generate samples from our distribution
x = norm.rvs(loc=mu, scale=sd, size=100)

# Maximum likelihood mean
x.mean()

# Maximum likelihood variance
x.var()

# Manually calculate the variance
((x - x.mean()) ** 2).mean()

# Maximum likelihod std
x.std()

# Unbiased variance
x.var(ddof=1)

# Manually calculate the unbiased estimate of the variance
((x - x.mean()) ** 2).sum() / (len(x) - 1)

# Unbiased std
x.std(ddof=1)

# At what height are you in the 95th percentile?
norm.ppf(0.95, loc=mu, scale=sd)

# You are 160 cm tall, what percentile are you in?
norm.cdf(160, loc=mu, scale=sd)

# You are 180 cm tall, what is the probability that someone is taller than you?
1 - norm.cdf(180, loc=mu, scale=sd)

# Should get same answer as above
norm.sf(180, loc=mu, scale=sd)
