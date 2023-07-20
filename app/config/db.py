import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SQLITE = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

POSTGRESQL = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'padrones',
        'USER': 'postgres',
        'PASSWORD': 'Admin654',
        'HOST': 'localhost',
        'PORT': '5432',
        'ATOMIC_REQUESTS': True
    }
}

# POSTGRESQL = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'padrones_23',
#         'USER': 'postgres',
#         'PASSWORD': 'v0t4m32023*',
#         'HOST': '10.3.0.23',
#         'PORT': '5432',
#         'ATOMIC_REQUESTS': True
#     }
# }
