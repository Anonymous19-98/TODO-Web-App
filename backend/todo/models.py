from django.db import models

# Create your models here.


class TODO(models.Model):
    """Model definition for TODO."""

    # TODO: Define fields here
    Title = models.CharField(max_length=120)
    Description = models.TextField(max_length=500)
    Completed = models.BooleanField(default=False)

    def __str__(self):
        """Unicode representation of TODO."""
        return self.Title
