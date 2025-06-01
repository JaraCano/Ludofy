from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    steam_id = models.CharField(max_length=100, blank=True, null=True)
    epic_username = models.CharField(max_length=100, blank=True, null=True)
    battlenet_tag = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username
