const message = document.getElementById('message')
const numOfSMS = document.getElementById('num-of-sms')
const btnSend = document.getElementById('btn-send')
const numberChars = document.getElementById('number-chars')

// محاسبه تعداد پیامک و محاسبه تعداد کاراکتر های باقی مانده
message.addEventListener('input', () => {

    // محاسبه تعداد پیامک
    let smsCount = parseInt((message.value.length / 70) + 1)

    numOfSMS.innerText = `(${smsCount} پیامک)`
    // محاسبه تعداد کاراکتر های باقی مانده
    numberChars.innerText = (70 * smsCount) - message.value.length
})


// ارسال پیامک

const blackList = ['احمق', 'بیشعور', 'نفهم','گاو' , 'الاغ', 'کثافت','سگ']
btnSend.addEventListener('click', () => {
    const words = message.value.split(' ')

    if (message.value.trim() == "") {
        alert('پیامی برای ارسال وجود ندارد')
        return false
    }
    else {

        for (let blackWord of blackList) {

            if (words.includes(blackWord)) {
                alert('شما نمی توانید از این سرویس برای پراکنی نفرت استفاره کنید (پیام ارسال نشد)')
                return false
            }
         
            
        }
        
        alert('پیامک شما ارسال شد')
    }
})


// function check (fieldId) {
//     document.getElementById(message).value
// }

