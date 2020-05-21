package com.example.backend.Services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.example.backend.Model.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Configuration
@EnableAsync
@Component
public class Mail {

    @Autowired
    private JavaMailSender javaMailSender;
    @Async
	public
    void sendEmail(Email email) throws Exception{
        SimpleMailMessage msg = new SimpleMailMessage();
        System.out.println(email.getEmailId());
        msg.setFrom("mehulnagar36@outlook.com");
        msg.setTo(email.getEmailId());
        msg.setSubject("Ride Booking via Rider");

        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = myDateObj.format(myFormatObj);

        System.out.println(email.getInfo());

        msg.setText("Ride has been successfully booked on " + formattedDate + "\n" + email.getInfo());

        javaMailSender.send(msg);
        
    }

    @Async
    public
    void sendEmailRider(Email email) throws Exception{
        SimpleMailMessage msg = new SimpleMailMessage();
        System.out.println(email.getRiderId());
        msg.setFrom("mehulnagar36@outlook.com");
        msg.setTo(email.getRiderId());
        msg.setSubject("Ride Booking update");

        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = myDateObj.format(myFormatObj);

        System.out.println(email.getInfo());

        msg.setText("Booking Has Been made on " + formattedDate + "\n" + "By: " + email.getInfoRider()
                    + " Contact the user to cancel ride...!!");

        javaMailSender.send(msg);
        
    }

    @Async
    public
    void sendCancelEmail(Email email) throws Exception{
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("mehulnagar36@outlook.com");
        msg.setTo(email.getEmailId());
        msg.setSubject("Ride Cancellation update");

        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = myDateObj.format(myFormatObj);

        System.out.println(email.getInfo());

        msg.setText("Ride has been successfully cancelled on " + formattedDate + "\n" + email.getInfo());

        javaMailSender.send(msg);
        
    }
}