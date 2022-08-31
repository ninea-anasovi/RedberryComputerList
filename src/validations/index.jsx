import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოებით').required("გთხოვთ შეიყვანეთ სახელი").matches( (/^[ა-ჰ]+$/), 'უნდა შეიცავდეს მხოლოდ ქართულ ასოებს'),
    surname: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოებით').required("გთხოვთ შეიყვანეთ გვარი").matches( (/^[ა-ჰ]+$/), 'უნდა შეიცავდეს მხოლოდ ქართულ ასოებს'),
    team_id: Yup.number().required("გთხოვთ აირჩიოთ თიმი"),
    position_id: Yup.number().required("გთხოვთ აირჩიოთ პოზიცია"),
    phone_number: Yup.string().matches(+995, 'გთხოვთ შეიყვანოთ ნომერი ქართული კოდით +995 XX XX XX').min(13, 'ტელეფონის ნომერი არ არსებობს').max(13, 'ტელეფონის ნომერი არ არსებობს').required("გთხოვთ შეიყვანოთ ტელ. ნომერი"),
    email: Yup.string().email('გთხოვთ შეიყვანოთ ნამდვილი იმეილი').matches(/@redberry.ge/, 'გთხოვთ შეიყვანოთ სამუშაო იმეილი example@redberry.ge').required('უნდა მთავრდებოდეს @redberry.ge-ით'),
    laptop_name: Yup.string().required("გთხოვთ შეიყვანეთ ლეპტოპის სახელი"),
    laptop_image: Yup.string().required(),
    laptop_brand_id: Yup.number().required("გთხოვთ აირჩიოთ ბრენდი"),
    laptop_cpu: Yup.string().required("გთხოვთ აირჩიოთ პროცესორი"),
    laptop_cpu_cores:  Yup.number().required("გთხოვთ მიუთითოთ ბირთვების რაოდენობა"),
    laptop_cpu_threads:  Yup.number().required("გთხოვთ მიუთითოთ ნაკადების რაოდენობა"),
    laptop_ram:  Yup.number().required("გთხოვთ მიუთითოთ ოპერატიული მეხსიერება"),
    laptop_hard_drive_type: Yup.string().required("გთხოვთ მიუთითოთ მეხსიერების ტიპი"),
    laptop_state: Yup.string().required("გთხოვთ მიუთითოთ მდგომარეობა"),
    laptop_purchase_date: Yup.string(),
    laptop_price: Yup.number().min(1, 'ფასი ვერ იქნება 0 ₾').required("გთხოვთ მიუთითოთ ფასი")
  });
