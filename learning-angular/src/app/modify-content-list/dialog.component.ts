import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Content } from "../helper-files/content-interface";

@Component({
    selector: 'dialog-sample',
    templateUrl: 'dialog.html',
    styleUrls: ['dialog.scss']
})
export class Dialog {
    newContent?: Content;
    constructor(public dialogRef: MatDialogRef<Dialog>,
        @Inject(MAT_DIALOG_DATA) public data: Content) {
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    okHandler(id: string, title: string, description: string, type: string, creator: string, imageURL: string, tags: string): void {
        let newContent = {
            title: title,
            type: type,
            description: description,
            creator: creator,
            imgURL: imageURL,
            tags: tags,
        }
        this.dialogRef.close(newContent);
    }

}