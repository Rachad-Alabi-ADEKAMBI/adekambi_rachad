<template>
    <div class="profile">
        <div class="profile__pic">
            <img src="" alt="full stack developer">

        </div>

        <div class="profile__details">
            <div class="h2">
                General informations
            </div>

            <div class="profile__details__list">
                <p>
                    <ul>
                        <li>
                            <i class="fas fa-pen"></i>
                            <span>Name: </span>
                            Rachad Alabi ADEKAMBI
                        </li>

                        <li>
                            <i></i>
                            <span>Location: </span>
                            Benin republic
                        </li>
                    </ul>
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