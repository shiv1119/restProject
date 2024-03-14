from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.email
    
    def check_password(self, raw_password):
        return True if raw_password == self.password else False


class AddEvent(models.Model):
    event_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    is_liked = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.event_name