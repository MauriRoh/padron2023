import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SQLITE = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# LOCALHOST
POSTGRESQL_LOCALHOST = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'padrones',
        'USER': 'postgres',
        'PASSWORD': 'Admin654',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
# DEPLOY
POSTGRESQL_DEPLOY = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'portalesdb',
        'USER': 'postgres',
        'PASSWORD': 'v0t4m32023*',
        'HOST': 'localhost',
        'PORT': 5432,
    }
}