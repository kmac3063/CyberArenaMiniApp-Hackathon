from django.db import models


class Achievement(models.Model):
    name = models.CharField(verbose_name='Name', max_length=64)


class Contest(models.Model):
    id = models.IntegerField(verbose_name='Id', primary_key=True)
    name = models.CharField(verbose_name='Name', max_length=64)
    type = models.IntegerField(verbose_name='Type')
    is_private = models.BooleanField(verbose_name='Is_Private')
    picture = models.ImageField(verbose_name='Image', upload_to='media/', null=True)
    datetime = models.DateTimeField(verbose_name='Date_And_Tame', null=True)
    prize = models.IntegerField(verbose_name='Prize', default=0)
    manager_id = models.CharField(verbose_name='Manager_Id', max_length=16)


class Player(models.Model):
    vk_id = models.CharField(verbose_name='VK_Id', primary_key=True, max_length=16)
    nickname = models.CharField(verbose_name='Nickname', max_length=64, null=True)
    rating = models.IntegerField(verbose_name='Rating', default=0)
    steam_profile = models.CharField(verbose_name='Steam_Profile', max_length=128, null=True)
    battle_net_profile = models.CharField(verbose_name='Battle_net_Profile', max_length=128, null=True)
    achievements = models.ManyToManyField(Achievement, blank=True)
    contests = models.ManyToManyField(Contest, through='Participation')


class Participation:
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
