from django.shortcuts import render
import rest_framework
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from cyberapp.models import *
from django.http import JsonResponse
from django.forms.models import model_to_dict
from cyberapp.id_generator import generate_id
from django.core import serializers as core_serializers

from rest_framework import serializers


class PlayerSerializer(serializers.Serializer):
    class Meta:
        model = Player
        fields = 'vk_id'


class ContestSerializer(serializers.Serializer):
    player = PlayerSerializer(read_only=True, many=True)
    class Meta:
        model = Contest
        fields = '__all__'


class TestContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = '__all__'


class TestAddContestAPIView(generics.CreateAPIView):
    serializer_class = TestContestSerializer
    queryset = Contest.objects.all()


class TestRUDContestAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TestContestSerializer
    queryset = Contest.objects.all()


# get all public tournaments
class AllContestsAPIView(APIView):
    def get(self, request, format=None):
        return JsonResponse(
                list(Contest.objects.all().values()),
                safe=False
        )

# vk_id -> all info
# contest_id -> all info
# post new user
# post new contest


class UserAPIView(APIView):
    # .../?format=json&id=id12311222
    def post(self, request, format=None):
        p = Player(vk_id=request.GET.dict().get('id'))
        print(request.GET.dict().get('id'))
        p.save()

        return JsonResponse({'done': True}, safe=False)

    # .../?format=json&id=id12311222
    def get(self, request, format=None):
        d = model_to_dict(Player.objects.get(vk_id=request.GET.dict().get('id')))
        return JsonResponse(
                d,
                safe=False
        )


class ContestAPIView(APIView):
    # .../?format=json&id=id12311222
    def post(self, request, format=None):
        d = request.GET.dict()
        i = generate_id()
        c = Contest(
            id=i,
            game=d.get('game'),
            name=d.get('name'),
            datetime_begin=d.get('date_begin'),
            datetime_end=d.get('date_end'),
            rules=d.get('rules'),
            is_private=(len(d.get('is_private')) == 4),
            team_limit=int(d.get('team_limit')),
            manager_id=d.get('manager_id'),
            description=d.get('description'),
        )
        c.save()

        print(model_to_dict(c))

        return JsonResponse({'id': i}, safe=False)

    # .../?format=json&id=0
    def get(self, request, format=None):
        d = model_to_dict(Contest.objects.get(id=request.GET.dict().get('id')))
        for i in range(len(d['players'])):
            d['players'][i] = getattr(d['players'][i], 'vk_id')

        return JsonResponse(
                d,
                safe=False
        )


class PlayersContestsAPIView(APIView):

    def get(self, request, format=None):
        vk_id = request.GET.dict().get('id')
        lst = [Contest.objects.all()]

        for c in lst:
            print(getattr(c, 'players'))


        return JsonResponse(
            "",
            safe=False
        )


class ParticipationAPIView(APIView):
    # .../?format=json&id=0&vk_id=id12321
    def post(self, request, format=None):
        d = request.GET.dict()
        p = Participation(contests=Contest.objects.get(id=d.get('id')), players=Player.objects.get(vk_id=d.get('vk_id')))
        p.save()

        return JsonResponse(list(Participation.objects.all().values()), safe=False)
