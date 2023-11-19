from rest_framework import serializers
from bookmarks.models import Bookmark
from django.db import IntegrityError


class BookmarkSerializer(serializers.ModelSerializer):
    """
    Serializer for the Bookmark model
    The create method handles the unique constraint on 'owner' and 'event'
    """

    owner = serializers.ReadOnlyField(source="owner.username")

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError(
                {"detail": "You have already bookmarked this event"})

    class Meta:
        model = Bookmark
        fields = ["id", "created_at", "owner", "event"]
