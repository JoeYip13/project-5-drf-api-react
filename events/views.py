from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from drf_api_ultimate_m_car.permissions import IsOwnerOrReadOnly
from .models import Event
from .serializers import EventSerializer


class EventList(generics.ListCreateAPIView):
    """
    List events or create a event if logged in
    The perform_create method associates the post with the logged in user.
    """
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Event.objects.annotate(
        reviews_count=Count('reviews', distinct=True),
        bookmarks_count=Count('bookmarks', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        # User feed
        'owner__followed__owner__profile',
        # user posts
        'owner__profile',
        # Event date
        'event_date',
        # Location
        'location',
    ]
    search_fields = [
        'owner__username',
        'title',
        'event_date',
        'location',
    ]
    ordering_fields = [
        'reviews_count',
        'bookmarks_count',
        'bookmarks__created_at',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a event and edit or delete it if you own it.
    """
    serializer_class = EventSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Event.objects.annotate(
        reviews_count=Count('reviews', distinct=True),
        bookmarks_count=Count('bookmarks', distinct=True),
    ).order_by('-created_at')
