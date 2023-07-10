<template>
  <div class="row mt-2 mb-2">
        <div class="crumbs">
            <span class="crumbs-text">
                <NuxtLink :to="{
                    path: '/'
                }" class="crumbs-link">
                    Home
                </NuxtLink>
                > Contact Us
            </span>
        </div>
    </div>
  <div class="container mt-4">
    <div class="row mb-4">
      <div class="col-7 outer-container ">
        <div class="title mb-4">If you want to know more</div>
        <div class="row-lg mb-4 contacts">
          Email us at <a href="mailto:info@gloriousKoalas.com" class="a">info@gloriousKoalas.com</a>
        </div>
        <div class="row-lg mb-4 contacts">
          Search us on <a href="https://it.linkedin.com/company/microsoft" class="a" target="_blank">linkedin</a>
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
  <div class="panel-container mt-4">
    <div class="row">
      <div class="col-6">
        <div class="headquarter-text">
          <div class="title">Headquarter</div>
          <div class="description">Via Aurelio Saffi 29 – 20123 Milano</div>
          <div class="description">+39 02.45496412</div>
          <div class="description">+39 02.45496418</div>
        </div>
      </div>
      <div class="col-6">
        <img src="../assets/persons/Building.jpg" class="image" alt="Image of the entrance to the company building">
      </div>
    </div>
  </div>
</template>

<style scoped>
.a {
  color: rgb(70, 107, 145);
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
  margin-bottom: 5%;
  max-width: 800px;
  width: 100%;
  height: auto;
}

.headquarter-text {
  text-align: center;
  margin-top: 15%;
  margin-bottom: 5%;
}
</style>