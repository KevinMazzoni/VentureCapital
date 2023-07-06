<template>
  <div class="container mt-4">
    <div class="row mb-4">
      <div class="col-7 outer-container ">
        <div class="title mb-4">IF YOU WANT TO KNOW MORE</div>
        <div class="row-lg mb-4 contacts">
      Email us at <a href="info@gloriousKoalas.com" class="a">info@gloriousKoalas.com</a>
    </div>
    <div class="row-lg mb-4 contacts">
      Search us on <a href="https://it.linkedin.com/company/microsoft" class="a">linkedin</a>
    </div>
      </div>
      <div class="col-lg container-submit-projects">
        <div class="title">Submit your project </div>
        <form>
          <div class="form-group">
            <label for="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="activityDescription">Activity Description:</label>
            <textarea id="activityDescription" name="activityDescription" class="form-control"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div class="spacer"></div>
  <div class="row mt-4">
    <div class="col-8">
      <div class="panel-container">
        <div class="row">
          <div class="col-lg-6 text-center">
            <!-- Contenuto di testo centrato -->
            <div class="headquarter-text">
              <h1>Headquarter</h1>
              <p>Via Aurelio Saffi 29 – 20123 Milano</p>
              <p>+39 02.45496412</p>
              <p>+39 02.45496418</p>
            </div>
          </div>
          <div class="col-lg-6">
              <img src="../assets/persons/Building.jpg" class="image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.a {
  color-scheme: darkblue;
  background-color: transparent;
  text-decoration: none;
}

.contacts {
  font-size: large;
}

.btn-primary {
  color: white;
  background-color: darkblue;
}

.spacer {
  background-color: lightblue;
  height: 20px;
  width: 100%;
  align-self: center;
}

.image {
  margin-left: 60%;
  margin-bottom: 5%;
  max-width: 800px;
  max-height: 500px;
}

.headquarter-text{
  margin-left: 50%;
  margin-top: 30%;
}
</style>