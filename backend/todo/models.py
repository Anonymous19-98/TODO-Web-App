from django.db import models
from django.db.models.base import ModelBase

# Create your models here.


class TODO(models.Model):
    """Model definition for TODO."""

    # TODO: Define fields here
    Title = models.CharField(max_length=120)
    Description = models.TextField(max_length=500)
    Completed = models.BooleanField(default=False)

    class Meta:
        """Meta definition for TODO."""

        verbose_name = 'TODO'
        verbose_name_plural = 'TODOs'

    def __str__(self):
        """Unicode representation of TODO."""
        return self.Title

    def save(self):
        """Save method for TODO."""
        pass

    def get_absolute_url(self):
        """Return absolute url for TODO."""
        return ('')

    # TODO: Define custom methods here
