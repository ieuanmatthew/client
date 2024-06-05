# Base R Shiny image
FROM rocker/r-ver:latest


# system libraries of general use
RUN apt-get update && apt-get install -y \
    sudo \
    pandoc \
    pandoc-citeproc \
    libcurl4-gnutls-dev \
    libcairo2-dev \
    libxt-dev \
    libssl-dev \
    libssh2-1-dev \
    libv8-dev \
    && rm -rf /var/lib/apt/lists/*

# Make a directory in the container
RUN mkdir /home/shiny-app

# Install R dependencies
RUN R -e "install.packages('shiny', repos='http://cran.rstudio.com/')"

# Copy the Shiny app code
COPY example/app.R /home/shiny-app/app.R

# Expose the application port
EXPOSE 8180

# Run the R Shiny app
CMD Rscript /home/shiny-app/app.R