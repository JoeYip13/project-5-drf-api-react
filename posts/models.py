from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """
    Post model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    # Define choices of models for each M car
    model_choices = [
        ('m1', 'M1'),
        ('1m', '1M Coupe'),
        ('m2', 'M2'),
        ('m3', 'M3'),
        ('m4', 'M4'),
        ('m5', 'M5'),
        ('m6', 'M6'),
        ('m8', 'M8'),
    ]
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    model = models.CharField(max_length=20, choices=model_choices)
    year = models.PositiveIntegerField()
    bhp = models.PositiveIntegerField()
    location = models.CharField(max_length=50)
    is_modified = models.BooleanField(default=False)
    colour = models.CharField(max_length=50)

    image = models.ImageField(
        upload_to='images/', default='../ultimate-m-car/default_post_xq3ozj',
        blank=True
    )
    image_filter = models.CharField(
        max_length=20, choices=model_choices, default='normal'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title} {self.model} {self.year} {self.bhp}
        {self.location} {self.is_modified} {self.colour}'
