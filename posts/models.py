from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """
    Post model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    model = models.CharField(max_length=20, blank=True)
    year = models.PositiveIntegerField(blank=True)
    bhp = models.PositiveIntegerField(blank=True)
    location = models.CharField(max_length=50, blank=True)
    is_modified = models.CharField(max_length=10, blank=True)
    colour = models.CharField(max_length=50, blank=True)

    image = models.ImageField(
        upload_to='images/', default='../ultimate-m-car/default_post_xq3ozj',
        blank=True
    )
    image_filter = models.CharField(
        max_length=20, default='normal'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return (
            f'{self.id} {self.title} {self.model} {self.year} {self.bhp} '
            f'{self.location} {self.is_modified} {self.colour} '
        )
