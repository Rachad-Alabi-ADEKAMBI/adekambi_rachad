<template>
    <div class="profile">
        <div class="profile__pic">
            <img src="img/logo.jpeg" alt="full stack developer">

        </div>

        <div class="profile__details">
            <h2 class="">
                General informations
            </h2>

            <div class="profile__details__list">
                <p>
                    <i class="fas fa-pen"></i>
                            <span>Name: </span>
                            Rachad Alabi ADEKAMBI
                </p>

                <p>
                    <i class="fa-solid fa-location-dot"></i>
                            <span>Location: </span>
                            Benin republic
                </p>


                <p>
                    <i class="far fa-star"></i>
                            <span>Date of birth: </span>
                            December 2nd
                </p>

                <p>
                    <i class="far fa-envelope"></i>
                        <span></span>
                        adekambirachad@gmail.com
                </p>

                <p>
                    <i class="fas fa-phone"></i>
                        <span></span>
                        +229 96228860
                </p>

                <p>
                    <i class="fas fa-whatsapp"></i>
                        <span></span>
                        +233 276000838
                </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  }
}
</script>