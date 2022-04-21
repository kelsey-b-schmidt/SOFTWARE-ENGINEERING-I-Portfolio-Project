from website import create_app

app = create_app()
app.secret_key = "helloCS-361"

if __name__ == "__main__":
    app.run(debug=True, port=8000)