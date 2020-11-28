from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from rest_framework import generics
from cyberapp.models import Player, Contest
from rest_framework import serializers


class TestCreateContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class TestCreateContestApiView(generics.CreateAPIView):
    serializer_class = TestCreateContestSerializer
    queryset = Player.objects.all()


class UserApiView(APIView):

    # создание нового пользователя
    # vk_id - идентификатор пользователя ВКонтакте (строка вида id1234...89)
    #
    def post(self, request, format=None):
        ...

    def get(self, request, format=None):
        return Response(str(request.GET), status=status.HTTP_200_OK)

    def put(self, request, format=None):
        ...

