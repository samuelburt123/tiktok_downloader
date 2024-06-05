from flask import Flask,render_template,request
import requests



app = Flask(__name__)



def get_video(link):
    url = "https://tiktok-video-downloader-api.p.rapidapi.com/media"

    querystring = {"videoUrl":link}

    headers = {
        "X-RapidAPI-Key": "2989f7484fmsh7b407dc22d99a56p126801jsn86c0f65577b7",
        "X-RapidAPI-Host": "tiktok-video-downloader-api.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    print(response.json())
    return response.json()
    

@app.route('/',methods=['GET','POST'])
def Index():
    if request.method == 'POST':
        link = request.form.get('link')
        
        video_data = get_video(link)
        if video_data:

            print("This is the video data:",video_data)
            return render_template('download_video.html',data=video_data)
        else:
            return render_template('video_not_found.html')


    return render_template('index.html')

@app.route('/contact',methods=['GET','POST'])
def Contact():
    return render_template('contact.html')





if __name__ == "__main__":
    app.run(debug=True)