FROM --platform=amd64 python:3.10-slim-buster

# Add SQL Server ODBC Driver 17 for Ubuntu 18.04
RUN apt-get update && apt-get -y install curl gnupg
RUN pip install pygame pygbag
RUN pip install certifi



RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
  && curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list

# install Microsoft SQL Server requirements.
ENV ACCEPT_EULA=Y
ENV PATH="$PATH:/opt/mssql-tools/bin"
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends --allow-unauthenticated  \
   unixodbc-dev \
   msodbcsql17 \
   mssql-tools \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY requirements.txt requirements.txt
COPY chessEngine chessEngine

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 8000

CMD pygbag chessEngine/ChessMain.py