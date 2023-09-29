FROM python:3.9.2

WORKDIR /flask-app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development
ENV FLASK_DEBUG=1

CMD [ "python3", "app.py"]
