<template>
    <div class="profile">
        <div class="profile__pic">
            <img src="img/logo.jpeg" alt="full stack developer">
            <div class="profile__pic__message">
                <div class="message" id="message">
                    <div class="message__text">
                        <p>
                        Contact me for freelance work
                        </p>
                    </div>
                        <div class="message__btn">
                            <a href="mailto:adekambirachad@gmail.com">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
            </div>
        </div>

        <div class="profile__details">
            <h2 class="title">
                General <br>
                information
            </h2>

            <div class="profile__details__list">
                <p>
                    <i class="fas fa-pen"></i>
                            <span>Name: </span>
                            Rachad Alabi ADEKAMBI
                </p>

                <p>
                    <i class="fas fa-map-pin"></i>
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

                  <p class="icons">
                    <a href="https://discord.com/users/9928"><i class="fab fa-discord"></i></a>
                    <a href="https://www.linkedin.com/in/rachad-alabi-adekambi-2753a21b5/"><i class="fab fa-linkedin"></i></a>
                    <a href="github.com/rachad-Alabi-ADEKAMBI"><i class="fab fa-github"></i></a>
                    <a href="https://wa.me/22996228860"><i class="fab fa-whatsapp"></i></a>
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