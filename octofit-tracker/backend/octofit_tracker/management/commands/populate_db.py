from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.conf import settings
from pymongo import MongoClient
from datetime import timedelta
from bson import ObjectId

class Command(BaseCommand):
    help = 'Populate the database with test data for users, teams, activity, leaderboard, and workouts'

    def handle(self, *args, **kwargs):
        try:
            self.stdout.write('Connecting to MongoDB...')
            client = MongoClient(settings.DATABASES['default']['HOST'], settings.DATABASES['default']['PORT'])
            db = client[settings.DATABASES['default']['NAME']]

            self.stdout.write('Dropping existing collections...')
            db.users.drop()
            db.teams.drop()
            db.activity.drop()
            db.leaderboard.drop()
            db.workouts.drop()

            self.stdout.write('Creating users...')
            users = [
                User(_id=ObjectId(), username='thundergod', email='thundergod@mhigh.edu', password='thundergodpassword'),
                User(_id=ObjectId(), username='metalgeek', email='metalgeek@mhigh.edu', password='metalgeekpassword'),
                User(_id=ObjectId(), username='zerocool', email='zerocool@mhigh.edu', password='zerocoolpassword'),
                User(_id=ObjectId(), username='crashoverride', email='crashoverride@mhigh.edu', password='crashoverridepassword'),
                User(_id=ObjectId(), username='sleeptoken', email='sleeptoken@mhigh.edu', password='sleeptokenpassword'),
            ]
            User.objects.bulk_create(users)

            self.stdout.write('Creating teams...')
            blue_team = Team(_id=ObjectId(), name='Blue Team')
            gold_team = Team(_id=ObjectId(), name='Gold Team')
            blue_team.save()
            gold_team.save()
            for user in users[:3]:
                blue_team.members.add(user)
            for user in users[3:]:
                gold_team.members.add(user)

            self.stdout.write('Creating activities...')
            activities = [
                Activity(_id=ObjectId(), user=users[0], activity_type='Cycling', duration=timedelta(hours=1)),
                Activity(_id=ObjectId(), user=users[1], activity_type='Crossfit', duration=timedelta(hours=2)),
                Activity(_id=ObjectId(), user=users[2], activity_type='Running', duration=timedelta(hours=1, minutes=30)),
                Activity(_id=ObjectId(), user=users[3], activity_type='Strength', duration=timedelta(minutes=30)),
                Activity(_id=ObjectId(), user=users[4], activity_type='Swimming', duration=timedelta(hours=1, minutes=15)),
            ]
            Activity.objects.bulk_create(activities)

            self.stdout.write('Creating leaderboard entries...')
            leaderboard_entries = [
                Leaderboard(_id=ObjectId(), user=users[0], score=100),
                Leaderboard(_id=ObjectId(), user=users[1], score=90),
                Leaderboard(_id=ObjectId(), user=users[2], score=95),
                Leaderboard(_id=ObjectId(), user=users[3], score=85),
                Leaderboard(_id=ObjectId(), user=users[4], score=80),
            ]
            Leaderboard.objects.bulk_create(leaderboard_entries)

            self.stdout.write('Creating workouts...')
            workouts = [
                Workout(_id=ObjectId(), name='Cycling Training', description='Training for a road cycling event'),
                Workout(_id=ObjectId(), name='Crossfit', description='Training for a crossfit competition'),
                Workout(_id=ObjectId(), name='Running Training', description='Training for a marathon'),
                Workout(_id=ObjectId(), name='Strength Training', description='Training for strength'),
                Workout(_id=ObjectId(), name='Swimming Training', description='Training for a swimming competition'),
            ]
            Workout.objects.bulk_create(workouts)

            self.stdout.write(self.style.SUCCESS('Successfully populated the database with test data.'))
        except Exception as e:
            import traceback
            self.stderr.write(self.style.ERROR('Error populating the database:'))
            self.stderr.write(self.style.ERROR(str(e)))
            self.stderr.write(traceback.format_exc())
