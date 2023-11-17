from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    """
    Event model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=50, blank=True)
    # event_date = models.DateField(blank=True)
    event_date = models.TextField(blank=True)
    event_time = models.TextField(blank=True)

    image = models.ImageField(
        upload_to='images/', default='../ultimate-m-car/default_post_xq3ozj',
        blank=True
    )

    class Meta:
        ordering = ['event_date']

    def __str__(self):
        return f'{self.id} {self.title}'
