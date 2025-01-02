from django.http import FileResponse
from django.conf import settings
import os
from pathlib import Path

PDF_PATH = Path(os.getcwd()) / "../" / "storage" / "resume.pdf"

def get_resume_pdf(request):
    response = FileResponse(open(PDF_PATH, 'rb'), content_type='application/pdf')
    response['Content-Disposition'] = f'inline; filename="resume"'
    return response