# encoding: utf-8
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        db.add_column(
            'projects_project',
            'compilation_profile',
            self.gf('django.db.models.fields.CharField')(
                max_length=32, null=True, blank=True
            ),
            keep_default=False
        )

    def backwards(self, orm):
        db.delete_column('projects_project', 'compilation_profile')

    models = {
        'projects.project': {
            'Meta': {'ordering': "('name',)", 'object_name': 'Project'},
            'compilation_profile': (
                'django.db.models.fields.CharField', [],
                {'max_length': '32', 'null': 'True', 'blank': 'True'}
            ),
            'id': (
                'django.db.models.fields.AutoField', [],
                {'primary_key': 'True'}
            ),
        },
    }

    complete_apps = ['projects']
