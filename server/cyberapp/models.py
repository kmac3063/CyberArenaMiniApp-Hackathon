from django.db import models


class Achievement(models.Model):
    name = models.CharField(verbose_name='Name', max_length=64, default='Достижение')


class Player(models.Model):
    vk_id = models.CharField(verbose_name='VK_Id', primary_key=True, max_length=16)
    nickname = models.CharField(verbose_name='Nickname', max_length=64, default='')
    rating = models.IntegerField(verbose_name='Rating', default=0)
    steam_profile = models.CharField(verbose_name='Steam_Profile', max_length=128, default='')
    battle_net_profile = models.CharField(verbose_name='Battle_net_Profile', max_length=128, default='')
    achievements = models.ManyToManyField(Achievement)

    def __str__(self):
        return self.vk_id


class Contest(models.Model):
    id = models.IntegerField(verbose_name='Id', primary_key=True, unique=True, db_index=True)
    game = models.CharField(verbose_name='Game', max_length=128, default="Название игры")
    name = models.CharField(verbose_name='Name', max_length=128, default="Турнир")
    datetime_begin = models.DateTimeField(verbose_name='Begin_Date', default="2000-01-01 00:00:00")
    datetime_end = models.DateTimeField(verbose_name='End_Date', default="2000-01-02 00:00:00")
    is_private = models.BooleanField(verbose_name='Is_Private', default=True)
    description = models.CharField(verbose_name='Description', max_length=512, default="Описание турнира")
    rules = models.CharField(verbose_name='Rules', max_length=512, default="Правила турнира")
    team_limit = models.IntegerField(verbose_name='Team_Limit', default=16)
    price = models.IntegerField(verbose_name='Price', default=0)
    prize = models.IntegerField(verbose_name='Prize', default=0)
    manager_id = models.CharField(verbose_name='VK_Id', max_length=16)
    table_type = models.IntegerField(verbose_name='Table_Type', default=0)
    table_data = models.CharField(verbose_name='Table_Data', default='', max_length=1024)
    players = models.ManyToManyField(Player, verbose_name='Players', through='Participation')

    def __str__(self):
        return self.id


class Participation(models.Model):
    contests = models.ForeignKey(Contest, on_delete=models.CASCADE)
    players = models.ForeignKey(Player, on_delete=models.CASCADE)
