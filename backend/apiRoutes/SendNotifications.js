const { CourierClient } = require("@trycourier/courier");


const sendNotifications = async(req, res) => {
    const courier = CourierClient({ authorizationToken: "pk_prod_NT2JNPT0X74YPEJ6ZN9NWATX6GV9" });

    const { messageId } = await courier.send({
        eventId: "personalized-welcome-email",
        recipientId: "Github_50944036",
        profile: {
            expo: {
                token: "ExponentPushToken[K3sAjKKHRc1wWLhrMZ45eN]"
            }
        },
        data: {
          firstname: "Aryan",
        },
        override: {
        },
      });
    
    return res.status(200).json({message: "Notification sent"});
}


module.exports = {
    sendNotifications: sendNotifications
};